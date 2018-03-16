module View exposing (view)

import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Html.Events.Extra as HE
import Time.Date as D exposing (Date)
import Types exposing (..)


view : Model -> Html Msg
view model =
    H.div
        [ HA.class "app" ]
        [ ideas model
        , calendar model
        ]


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


calendar : Model -> Html Msg
calendar { calendar, currentDate } =
    H.div [ HA.class "calendar" ]
        [ H.div [ HA.class "calendar-header" ]
            [ H.div [ HA.class "day-header" ] [ H.text "Mon" ]
            , H.div [ HA.class "day-header" ] [ H.text "Tue" ]
            , H.div [ HA.class "day-header" ] [ H.text "Wed" ]
            , H.div [ HA.class "day-header" ] [ H.text "Thu" ]
            , H.div [ HA.class "day-header" ] [ H.text "Fri" ]
            , H.div [ HA.class "day-header" ] [ H.text "Sat" ]
            , H.div [ HA.class "day-header" ] [ H.text "Sun" ]
            ]
        , H.div [ HA.class "days" ]
            (calendar |> List.map (day currentDate))
        ]


day : Date -> Day -> Html Msg
day today day =
    H.div
        [ HA.classList
            [ ( "day", True )
            , ( "today", today == day.date )
            , ( "past", D.compare day.date today == LT )
            , ( "no-plan", day.plan == Nothing )
            ]
        ]
        [ H.div
            [ HA.class "date" ]
            [ H.text <| (D.day day.date |> toString) ++ ". " ++ (D.month day.date |> toString) ++ "." ]
        , H.div
            [ HA.class "plan" ]
            [ day.plan
                |> Maybe.map debug
                |> Maybe.withDefault (H.text "no plan")
            ]
        ]


debug : a -> Html Msg
debug a =
    a
        |> toString
        |> H.text
