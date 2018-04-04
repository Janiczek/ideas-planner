module Calendar exposing (currentDates, withPlans)

import Date.Extra as Date
import Dict exposing (Dict)
import Time.Date as D exposing (Date)
import Types exposing (..)


{-| Return dates from one week before last Monday
to four weeks from now (ending Friday)
-}
currentDates : Date -> List Date
currentDates currentDate =
    let
        weekday =
            D.weekday currentDate

        subtractDays =
            Date.daysFromMonday weekday

        lastMonday =
            currentDate |> D.addDays -subtractDays

        weekBeforeLastMonday =
            lastMonday |> D.addDays -7

        sundayFourWeeksFromLastMonday =
            lastMonday |> D.addDays (7 * 4 - 1)
    in
    Date.range
        weekBeforeLastMonday
        sundayFourWeeksFromLastMonday


withPlans : Dict DateTuple Plan -> List Date -> List Day
withPlans plans dates =
    dates
        |> List.map
            (\date ->
                { date = date
                , plan = Dict.get (D.toTuple date) plans
                }
            )
