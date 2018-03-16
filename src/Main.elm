port module Main exposing (main)

import Dict
import Html as H
import Mouse
import PersistentData
import Time.Date as D
import Types exposing (..)
import View exposing (view)


-- TODO show lines: how many times each idea has been done? (or, mostDone - thisDone)
-- TODO color of an idea


port save : PersistentData -> Cmd msg


save_ : Model -> ( Model, Cmd msg )
save_ model =
    ( model
    , model
        |> PersistentData.fromModel
        |> save
    )


main : Program Flags Model Msg
main =
    H.programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init { currentDate, savedData } =
    let
        { ideas, plans } =
            savedData
                |> Maybe.withDefault
                    { ideas = []
                    , plans = []
                    }

        plansDict =
            plans
                |> Dict.fromList
    in
    ( { ideas = ideas
      , newIdeaInput = ""
      , plans = plansDict
      , currentDate = D.fromTuple currentDate
      , currentlyHoveredDate = Nothing
      , dragState = NoDrag
      , mouse = { x = 0, y = 0 }
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetNewIdeaInput newIdeaInput ->
            ( { model | newIdeaInput = newIdeaInput }
            , Cmd.none
            )

        AddNewIdea ->
            if String.isEmpty model.newIdeaInput then
                ( model, Cmd.none )
            else
                { model
                    | ideas = model.newIdeaInput :: model.ideas
                    , newIdeaInput = ""
                }
                    |> save_

        RemoveIdea index ->
            { model
                | ideas =
                    model.ideas
                        |> List.indexedMap (,)
                        |> List.filter (\( i, idea ) -> i /= index)
                        |> List.map (\( i, idea ) -> idea)
            }
                |> save_

        DragIdea idea ->
            ( { model
                | dragState = DraggingIdea idea
                , currentlyHoveredDate = Nothing
              }
            , Cmd.none
            )

        DragPlan ( date, plan ) ->
            ( { model
                | dragState = DraggingPlan ( date, plan )
                , currentlyHoveredDate = Just date
              }
            , Cmd.none
            )

        DragOverDay newCurrentDate ->
            ( { model | currentlyHoveredDate = Just newCurrentDate }
            , Cmd.none
            )

        DragLeaveDay ->
            ( { model | currentlyHoveredDate = Nothing }
            , Cmd.none
            )

        StopDrag ->
            let
                modelWithoutDrag =
                    { model
                        | currentlyHoveredDate = Nothing
                        , dragState = NoDrag
                    }
            in
            (case model.dragState of
                DraggingIdea idea ->
                    model.currentlyHoveredDate
                        |> Maybe.map
                            (\date ->
                                { modelWithoutDrag
                                    | plans =
                                        modelWithoutDrag.plans
                                            |> Dict.insert (D.toTuple date) idea
                                }
                            )
                        |> Maybe.withDefault modelWithoutDrag

                DraggingPlan ( oldDate, plan ) ->
                    let
                        modelWithoutDraggedPlan =
                            { modelWithoutDrag
                                | plans =
                                    modelWithoutDrag.plans
                                        |> Dict.remove (D.toTuple oldDate)
                            }
                    in
                    model.currentlyHoveredDate
                        |> Maybe.map
                            (\date ->
                                { modelWithoutDraggedPlan
                                    | plans =
                                        modelWithoutDraggedPlan.plans
                                            |> Dict.insert (D.toTuple date) plan
                                }
                            )
                        |> Maybe.withDefault modelWithoutDraggedPlan

                NoDrag ->
                    modelWithoutDrag
            )
                |> save_

        MouseMoved position ->
            ( { model | mouse = position }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Mouse.moves MouseMoved
