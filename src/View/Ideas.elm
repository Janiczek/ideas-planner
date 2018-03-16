module View.Ideas exposing (ideas)

import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Html.Events.Extra as HE
import Types exposing (..)


ideas : Model -> Html Msg
ideas { ideas, newIdeaInput } =
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
            , H.button
                [ HE.onClick AddNewIdea
                , HA.class "add-new-idea"
                ]
                [ H.text "Add" ]
            ]
        , H.div
            [ HA.class "ideas" ]
            (ideas |> List.indexedMap idea)
        ]


idea : Int -> Idea -> Html Msg
idea index ideaContent =
    H.div
        [ HA.class "idea" ]
        [ H.div
            [ HA.class "idea-content" ]
            [ H.text ideaContent ]
        , H.button
            [ HA.class "remove-idea"
            , HE.onClick (RemoveIdea index)
            ]
            [ H.text "X" ]
        ]
