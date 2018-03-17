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
    , ideas : List ( Idea, Color )
    , newIdeaInput : String
    , plans : Dict DateTuple Idea
    , dragState : DragState
    , currentlyHoveredDate : Maybe Date
    , mouse : Position
    , lastColor : Color
    }


type alias PersistentData =
    { ideas : List { idea : Idea, rgbColor : ( Int, Int, Int ) }
    , plans : List ( DateTuple, Idea )
    , lastColor : Maybe ( Int, Int, Int )
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
