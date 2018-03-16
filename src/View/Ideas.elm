module View.Ideas exposing (draggedIdea, ideas)

import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Html.Events.Extra as HE
import Types exposing (..)
import View.Debug as View


ideas : Model -> Html Msg
ideas ({ ideas, newIdeaInput, currentlyHoveredDate, dragState } as model) =
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
                (ideas |> List.indexedMap idea)
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


idea : Int -> Idea -> Html Msg
idea index ideaContent =
    H.div
        [ HA.class "idea"
        , HE.onMouseDown (DragIdea ideaContent)
        ]
        [ H.div
            [ HA.class "idea-content" ]
            [ H.text ideaContent ]
        , removeIdeaButton index
        ]


draggedIdea : Model -> Html Msg
draggedIdea { dragState, mouse } =
    let
        view : Idea -> Html Msg
        view idea =
            H.div
                [ HA.class "idea dragged"
                , HA.style
                    [ ( "left", toString (mouse.x + 10) ++ "px" )
                    , ( "top", toString (mouse.y + 10) ++ "px" )
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
