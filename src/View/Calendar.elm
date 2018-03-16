module View.Calendar exposing (calendar)

import Calendar
import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Time.Date as D exposing (Date, Weekday(Sat, Sun))
import Types exposing (..)


calendar : Model -> Html Msg
calendar { plans, currentDate, dragState } =
    H.div
        [ HA.class "calendar" ]
        [ calendarHeader
        , H.div
            [ HA.class "days" ]
            (currentDate
                |> Calendar.currentDates
                |> Calendar.withPlans plans
                |> List.map (day currentDate dragState)
            )
        ]


daysOfWeek : List String
daysOfWeek =
    [ "Mon"
    , "Tue"
    , "Wed"
    , "Thu"
    , "Fri"
    , "Sat"
    , "Sun"
    ]


calendarHeader : Html Msg
calendarHeader =
    H.div
        [ HA.class "calendar-header" ]
        (List.map dayHeader daysOfWeek)


dayHeader : String -> Html Msg
dayHeader day =
    H.div
        [ HA.class "day-header" ]
        [ H.text day ]


day : Date -> DragState -> Day -> Html Msg
day today dragState day =
    let
        isToday =
            today == day.date
    in
    H.div
        ([ HA.classList
            [ ( "day", True )
            , ( "today", isToday )
            , ( "past", D.compare day.date today == LT )
            , ( "no-plan", day.idea == Nothing )
            ]
         ]
            ++ enableDragPlan day
            ++ enableDragEnd day dragState
        )
        [ H.div
            [ HA.class "date" ]
            [ H.text <|
                (D.day day.date |> toString)
                    ++ ". "
                    ++ (D.month day.date |> toString)
                    ++ "."
                    ++ (if isToday then
                            " - today"
                        else
                            ""
                       )
            ]
        , H.div
            [ HA.class "plan" ]
            [ day.idea
                |> Maybe.withDefault "no plan"
                |> H.text
            ]
        ]


enableDragPlan : Day -> List (H.Attribute Msg)
enableDragPlan day =
    day.idea
        |> Maybe.map
            (\idea ->
                [ HE.onMouseDown (DragPlan ( day.date, idea )) ]
            )
        |> Maybe.withDefault []


enableDragEnd : Day -> DragState -> List (H.Attribute Msg)
enableDragEnd day dragState =
    if dragState == NoDrag then
        []
    else
        [ HE.onMouseOver (DragOverDay day.date)
        , HE.onMouseOut DragLeaveDay
        ]
