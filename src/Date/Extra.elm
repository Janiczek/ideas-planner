module Date.Extra exposing (daysFromMonday, fromRecord, range)

import Time.Date as D exposing (Date, Weekday(..))
import Types exposing (..)


fromRecord : DateRecord -> Date
fromRecord { year, month, day } =
    D.date year month day


range : Date -> Date -> List Date
range from to =
    case D.compare from to of
        LT ->
            from :: range (D.addDays 1 from) to

        EQ ->
            [ to ]

        GT ->
            []


daysFromMonday : Weekday -> Int
daysFromMonday weekday =
    case weekday of
        Mon ->
            0

        Tue ->
            1

        Wed ->
            2

        Thu ->
            3

        Fri ->
            4

        Sat ->
            5

        Sun ->
            6
