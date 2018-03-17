module View.Ideas exposing (draggedIdea, ideas)

import Color exposing (Color)
import Dict exposing (Dict)
import Dict.Extra as Dict
import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Html.Events.Extra as HE
import Types exposing (..)
import View.Debug as View


ideas : Model -> Html Msg
ideas ({ ideas, newIdeaInput, currentlyHoveredDate, dragState, plans } as model) =
    H.div
        [ HA.class "ideas-column" ]
        [ H.div [ HA.class "ideas-wrapper" ]
            [ H.div
                [ HA.class "inputs" ]
                [ H.input
                    [ HA.type_ "text"
                    , HE.onInput SetNewIdeaInput
                    , HE.onEnter AddNewIdea
                    , HA.value newIdeaInput
                    , HA.placeholder "New idea..."
                    , HA.class "new-idea"
                    ]
                    []
                , addNewIdeaButton
                ]
            , H.div
                [ HA.class "ideas" ]
                (ideas
                    |> List.indexedMap (idea plans)
                )
            ]
        , View.debug model
        ]


addNewIdeaButton : Html Msg
addNewIdeaButton =
    H.button
        [ HE.onClick AddNewIdea
        , HA.class "add-new-idea"
        ]
        [ H.text "Add" ]


idea : Dict DateTuple Idea -> Int -> ( Idea, Color ) -> Html Msg
idea plans index ( idea, color ) =
    let
        { red, green, blue } =
            Color.toRgb color
    in
    H.div
        [ HA.class "idea"
        , HE.onMouseDown (DragIdea idea)
        , HA.style
            [ ( "background-color"
              , "rgb("
                    ++ toString red
                    ++ ","
                    ++ toString green
                    ++ ","
                    ++ toString blue
                    ++ ")"
              )
            ]
        ]
        [ H.div
            [ HA.class "idea-content" ]
            [ H.div [ HA.class "idea-text" ] [ H.text idea ]
            , H.div
                [ HA.class "idea-frequency"
                , HA.title "The dots mean: How much do you neglect this idea?"
                ]
                [ frequency plans idea ]
            ]
        , removeIdeaButton index
        ]


frequency : Dict DateTuple Idea -> Idea -> Html Msg
frequency plans idea =
    let
        frequencies : Dict Idea Int
        frequencies =
            plans
                |> Dict.toList
                |> List.map Tuple.second
                |> Dict.frequencies

        biggestFrequency : Int
        biggestFrequency =
            frequencies
                |> Dict.foldl
                    (\idea frequency maxSoFar -> max maxSoFar frequency)
                    0

        thisFrequency : Int
        thisFrequency =
            frequencies
                |> Dict.get idea
                |> Maybe.withDefault 0

        difference : Int
        difference =
            biggestFrequency - thisFrequency
    in
    "•"
        |> String.repeat difference
        |> H.text


px : Int -> String
px amount =
    toString amount ++ "px"


draggedIdea : Model -> Html Msg
draggedIdea { dragState, mouse } =
    let
        view : Idea -> Html Msg
        view idea =
            H.div
                [ HA.class "idea dragged"
                , HA.style
                    [ ( "left", px (mouse.x + 20) )
                    , ( "top", px (mouse.y + 20) )
                    ]
                ]
                [ H.div
                    [ HA.class "idea-content" ]
                    [ H.text idea ]
                ]
    in
    case dragState of
        NoDrag ->
            H.text ""

        DraggingIdea idea ->
            view idea

        DraggingPlan ( date, idea ) ->
            view idea


removeIdeaButton : Int -> Html Msg
removeIdeaButton index =
    H.button
        [ HA.class "remove-idea"
        , HE.onClick (RemoveIdea index)
        ]
        [ H.text "X" ]
