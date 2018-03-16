module View exposing (view)

import Html as H exposing (Html)
import Html.Attributes as HA
import Types exposing (..)
import View.Calendar as View
import View.Ideas as View


view : Model -> Html Msg
view model =
    H.div
        [ HA.class "app" ]
        [ View.ideas model
        , View.calendar model
        ]
