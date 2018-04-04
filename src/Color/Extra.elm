module Color.Extra exposing (fromTuple, toTuple)

import Color exposing (Color)


toTuple : Color -> ( Int, Int, Int )
toTuple color =
    let
        { red, green, blue } =
            Color.toRgb color
    in
    ( red, green, blue )


fromTuple : ( Int, Int, Int ) -> Color
fromTuple ( r, g, b ) =
    Color.rgb r g b
