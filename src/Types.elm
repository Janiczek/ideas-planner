module Types exposing (..)

import Time.Date as D exposing (Date, Weekday(..))


type alias DateRecord =
    { day : Int
    , month : Int
    , year : Int
    }


type alias Flags =
    { currentDate : DateRecord
    }


type alias Model =
    { currentDate : Date
    , ideas : List Idea
    , newIdeaInput : String
    , calendar : Calendar
    }


type alias Day =
    { date : Date
    , plan : Maybe Plan
    }


type alias Calendar =
    List Day


type alias Week =
    List Day


type alias Idea =
    String


type alias Plan =
    Idea


type Msg
    = SetNewIdeaInput String
    | AddNewIdea
    | RemoveIdea Int
