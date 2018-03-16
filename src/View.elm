module View exposing (view)

import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Types exposing (..)
import View.Calendar as View
import View.Ideas as View


view : Model -> Html Msg
view model =
    H.div
        ([ HA.classList
            [ ( "app", True )
            , ( "dragging", model.dragState /= NoDrag )
            ]
         ]
            ++ enableDragEnd model.dragState
        )
        [ View.ideas model
        , View.calendar model
        ]


enableDragEnd : DragState -> List (H.Attribute Msg)
enableDragEnd dragState =
    if dragState == NoDrag then
        []
    else
        [ HE.onMouseUp StopDrag ]
