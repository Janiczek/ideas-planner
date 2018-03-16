module View.Debug exposing (debug)

import Html as H exposing (Html)
import Html.Attributes as HA
import Types exposing (..)


debug : Model -> Html Msg
debug model =
    H.div
        [ HA.class "debug" ]
        [ toHtml "mouse" model.mouse
        , toHtml "dragState" model.dragState
        , toHtml "currentlyHoveredDate" model.currentlyHoveredDate
        ]


toHtml : String -> a -> Html Msg
toHtml label a =
    H.div
        [ HA.class "debug-item" ]
        [ H.div
            [ HA.class "debug-label" ]
            [ H.text label ]
        , a
            |> toString
            |> H.text
        ]
