module View.Calendar exposing (calendar)

import Calendar
import Html as H exposing (Html)
import Html.Attributes as HA
import Time.Date as D exposing (Date)
import Types exposing (..)


calendar : Model -> Html Msg
calendar { plans, currentDate } =
    H.div
        [ HA.class "calendar" ]
        [ calendarHeader
        , H.div
            [ HA.class "days" ]
            (currentDate
                |> Calendar.currentDates
                |> Calendar.withPlans plans
                |> List.map (day currentDate)
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
            [ H.text <|
                (D.day day.date |> toString)
                    ++ ". "
                    ++ (D.month day.date |> toString)
                    ++ "."
            ]
        , H.div
            [ HA.class "plan" ]
            [ day.plan
                |> Maybe.withDefault "no plan"
                |> H.text
            ]
        ]
