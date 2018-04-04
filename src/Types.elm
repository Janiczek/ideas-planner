module Types exposing (..)

import Color exposing (Color)
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
    , seedForColor : Int
    }


type alias Model =
    { currentDate : Date
    , ideas : List Idea
    , newIdeaInput : String
    , plans : Dict DateTuple Plan
    , dragState : DragState
    , currentlyHoveredDate : Maybe Date
    , mouse : Position
    , lastColor : Color
    }


type alias PersistentData =
    { ideas : List Idea
    , plans : List ( DateTuple, Plan )
    , lastColor : Maybe ( Int, Int, Int )
    }


type DragState
    = NoDrag
    | DraggingIdea Idea
    | DraggingPlan ( Date, Plan )


type alias Day =
    { date : Date
    , plan : Maybe Plan
    }


type alias Plan =
    { idea : Idea
    }


type alias Idea =
    { text : String
    , rgbColor : ( Int, Int, Int )
    }


type alias Calendar =
    List Day


type alias Week =
    List Day


type Msg
    = SetNewIdeaInput String
    | AddNewIdea
    | RemoveIdea Int
    | DragIdea Idea
    | DragPlan ( Date, Plan )
    | DragOverDay Date
    | DragLeaveDay
    | StopDrag
    | MouseMoved Position
