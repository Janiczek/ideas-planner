module PersistentData exposing (fromModel)

import Dict
import Types exposing (..)


fromModel : Model -> PersistentData
fromModel model =
    { ideas = model.ideas
    , plans = Dict.toList model.plans
    }
