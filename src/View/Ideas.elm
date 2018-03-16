module View.Ideas exposing (ideas)

import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Html.Events.Extra as HE
import Types exposing (..)


ideas : Model -> Html Msg
ideas { ideas, newIdeaInput, currentlyHoveredDate, dragState } =
    H.div
        [ HA.class "ideas-column" ]
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
        , currentlyHoveredDate |> toString |> H.text |> List.singleton |> H.div []
        , dragState |> toString |> H.text |> List.singleton |> H.div []
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


removeIdeaButton : Int -> Html Msg
removeIdeaButton index =
    H.button
        [ HA.class "remove-idea"
        , HE.onClick (RemoveIdea index)
        ]
        [ H.text "X" ]
