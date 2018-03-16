module Calendar exposing (init)

import Date.Extra as Date
import Time.Date as D
import Types exposing (..)


init : DateRecord -> Calendar
init d =
    -- four weeks from now
    let
        date =
            D.date d.year d.month d.day

        weekday =
            D.weekday date

        subtractDays =
            Date.daysFromMonday weekday

        lastMonday =
            date |> D.addDays -subtractDays

        weekBeforeLastMonday =
            lastMonday |> D.addDays -7

        sundayFourWeeksFromLastMonday =
            lastMonday |> D.addDays (7 * 4 - 1)

        calendarDates =
            Date.range
                weekBeforeLastMonday
                sundayFourWeeksFromLastMonday
    in
    calendarDates
        |> List.map
            (\date ->
                { date = date
                , plan = Nothing
                }
            )
