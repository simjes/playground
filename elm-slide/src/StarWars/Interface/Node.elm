-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module StarWars.Interface.Node exposing (Fragments, fragments, id, maybeFragments)

import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.Operation exposing (RootMutation, RootQuery, RootSubscription)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (FragmentSelectionSet(..), SelectionSet(..))
import Json.Decode as Decode
import StarWars.InputObject
import StarWars.Interface
import StarWars.Object
import StarWars.Scalar
import StarWars.ScalarCodecs
import StarWars.Union


type alias Fragments decodesTo =
    { onFilm : SelectionSet decodesTo StarWars.Object.Film
    , onSpecies : SelectionSet decodesTo StarWars.Object.Species
    , onPlanet : SelectionSet decodesTo StarWars.Object.Planet
    , onPerson : SelectionSet decodesTo StarWars.Object.Person
    , onStarship : SelectionSet decodesTo StarWars.Object.Starship
    , onVehicle : SelectionSet decodesTo StarWars.Object.Vehicle
    }


{-| Build an exhaustive selection of type-specific fragments.
-}
fragments :
    Fragments decodesTo
    -> SelectionSet decodesTo StarWars.Interface.Node
fragments selections =
    Object.exhuastiveFragmentSelection
        [ Object.buildFragment "Film" selections.onFilm
        , Object.buildFragment "Species" selections.onSpecies
        , Object.buildFragment "Planet" selections.onPlanet
        , Object.buildFragment "Person" selections.onPerson
        , Object.buildFragment "Starship" selections.onStarship
        , Object.buildFragment "Vehicle" selections.onVehicle
        ]


{-| Can be used to create a non-exhuastive set of fragments by using the record
update syntax to add `SelectionSet`s for the types you want to handle.
-}
maybeFragments : Fragments (Maybe decodesTo)
maybeFragments =
    { onFilm = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onSpecies = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onPlanet = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onPerson = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onStarship = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onVehicle = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    }


{-| The id of the object.
-}
id : SelectionSet StarWars.ScalarCodecs.Id StarWars.Interface.Node
id =
    Object.selectionForField "ScalarCodecs.Id" "id" [] (StarWars.ScalarCodecs.codecs |> StarWars.Scalar.unwrapCodecs |> .codecId |> .decoder)
