module Types exposing (..)

import Dict exposing (Dict)
import Time.Date as D exposing (Date, Weekday(..))


{-| (Year, Month, Day)
-}
type alias DateTuple =
    ( Int, Int, Int )


type alias Flags =
    { savedData : Maybe PersistentData
    , currentDate : DateTuple
    }


type alias Model =
    { currentDate : Date
    , ideas : List Idea
    , newIdeaInput : String
    , plans : Dict DateTuple Plan
    , dragState : DragState
    , currentlyHoveredDate : Maybe Date
    }


type alias PersistentData =
    { ideas : List Idea
    , plans : List ( DateTuple, Plan )
    }


type DragState
    = NoDrag
    | DraggingIdea Idea
    | DraggingPlan ( Date, Plan )


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
    | DragIdea Idea
    | DragPlan ( Date, Plan )
    | DragOverDay Date
    | DragLeaveDay
    | StopDrag
