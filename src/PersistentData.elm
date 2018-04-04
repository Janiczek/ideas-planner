module PersistentData exposing (fromModel)

import Color.Extra as Color
import Dict
import Types exposing (..)


fromModel : Model -> PersistentData
fromModel model =
    { ideas =
        model.ideas
            |> List.map
                (\{ text, rgbColor } ->
                    { text = text
                    , rgbColor = rgbColor
                    }
                )
    , plans = Dict.toList model.plans
    , lastColor = Just (Color.toTuple model.lastColor)
    }
