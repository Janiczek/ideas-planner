module Types exposing (..)

import Dict exposing (Dict)
import Mouse exposing (Position)
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
    , plans : Dict DateTuple Idea
    , dragState : DragState
    , currentlyHoveredDate : Maybe Date
    , mouse : Position
    }


type alias PersistentData =
    { ideas : List Idea
    , plans : List ( DateTuple, Idea )
    }


type DragState
    = NoDrag
    | DraggingIdea Idea
    | DraggingPlan ( Date, Idea )


type alias Day =
    { date : Date
    , idea : Maybe Idea
    }


type alias Calendar =
    List Day


type alias Week =
    List Day


type alias Idea =
    String


type Msg
    = SetNewIdeaInput String
    | AddNewIdea
    | RemoveIdea Int
    | DragIdea Idea
    | DragPlan ( Date, Idea )
    | DragOverDay Date
    | DragLeaveDay
    | StopDrag
    | MouseMoved Position
