module PersistentData exposing (fromModel)

import Color.Extra as Color
import Dict
import Types exposing (..)


fromModel : Model -> PersistentData
fromModel model =
    { ideas =
        model.ideas
            |> List.map
                (\( idea, color ) ->
                    { idea = idea
                    , rgbColor = Color.toTuple color
                    }
                )
    , plans = Dict.toList model.plans
    , lastColor = Just (Color.toTuple model.lastColor)
    }
