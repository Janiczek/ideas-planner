module Main exposing (main)

import Calendar
import Date.Extra as Date
import Html as H
import Types exposing (..)
import View exposing (view)


-- TODO show lines: how many times each idea has been done? (or, mostDone - thisDone)
-- TODO color of an idea


main : Program Flags Model Msg
main =
    H.programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init { currentDate } =
    ( { ideas = []
      , newIdeaInput = ""
      , calendar = Calendar.init currentDate
      , currentDate = Date.fromRecord currentDate
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
            ( if String.isEmpty model.newIdeaInput then
                model
              else
                { model
                    | ideas = model.newIdeaInput :: model.ideas
                    , newIdeaInput = ""
                }
            , Cmd.none
            )

        RemoveIdea index ->
            ( { model
                | ideas =
                    model.ideas
                        |> List.indexedMap (,)
                        |> List.filter (\( i, idea ) -> i /= index)
                        |> List.map (\( i, idea ) -> idea)
              }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
