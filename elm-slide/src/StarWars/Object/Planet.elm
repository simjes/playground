-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module StarWars.Object.Planet exposing (FilmConnectionOptionalArguments, ResidentConnectionOptionalArguments, climates, created, diameter, edited, filmConnection, gravity, id, name, orbitalPeriod, population, residentConnection, rotationPeriod, surfaceWater, terrains)

import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.Operation exposing (RootMutation, RootQuery, RootSubscription)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (SelectionSet)
import Json.Decode as Decode
import StarWars.InputObject
import StarWars.Interface
import StarWars.Object
import StarWars.Scalar
import StarWars.ScalarCodecs
import StarWars.Union


{-| The name of this planet.
-}
name : SelectionSet (Maybe String) StarWars.Object.Planet
name =
    Object.selectionForField "(Maybe String)" "name" [] (Decode.string |> Decode.nullable)


{-| The diameter of this planet in kilometers.
-}
diameter : SelectionSet (Maybe Int) StarWars.Object.Planet
diameter =
    Object.selectionForField "(Maybe Int)" "diameter" [] (Decode.int |> Decode.nullable)


{-| The number of standard hours it takes for this planet to complete a single
rotation on its axis.
-}
rotationPeriod : SelectionSet (Maybe Int) StarWars.Object.Planet
rotationPeriod =
    Object.selectionForField "(Maybe Int)" "rotationPeriod" [] (Decode.int |> Decode.nullable)


{-| The number of standard days it takes for this planet to complete a single orbit
of its local star.
-}
orbitalPeriod : SelectionSet (Maybe Int) StarWars.Object.Planet
orbitalPeriod =
    Object.selectionForField "(Maybe Int)" "orbitalPeriod" [] (Decode.int |> Decode.nullable)


{-| A number denoting the gravity of this planet, where "1" is normal or 1 standard
G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
-}
gravity : SelectionSet (Maybe String) StarWars.Object.Planet
gravity =
    Object.selectionForField "(Maybe String)" "gravity" [] (Decode.string |> Decode.nullable)


{-| The average population of sentient beings inhabiting this planet.
-}
population : SelectionSet (Maybe Float) StarWars.Object.Planet
population =
    Object.selectionForField "(Maybe Float)" "population" [] (Decode.float |> Decode.nullable)


{-| The climates of this planet.
-}
climates : SelectionSet (Maybe (List (Maybe String))) StarWars.Object.Planet
climates =
    Object.selectionForField "(Maybe (List (Maybe String)))" "climates" [] (Decode.string |> Decode.nullable |> Decode.list |> Decode.nullable)


{-| The terrains of this planet.
-}
terrains : SelectionSet (Maybe (List (Maybe String))) StarWars.Object.Planet
terrains =
    Object.selectionForField "(Maybe (List (Maybe String)))" "terrains" [] (Decode.string |> Decode.nullable |> Decode.list |> Decode.nullable)


{-| The percentage of the planet surface that is naturally occuring water or bodies
of water.
-}
surfaceWater : SelectionSet (Maybe Float) StarWars.Object.Planet
surfaceWater =
    Object.selectionForField "(Maybe Float)" "surfaceWater" [] (Decode.float |> Decode.nullable)


type alias ResidentConnectionOptionalArguments =
    { after : OptionalArgument String
    , first : OptionalArgument Int
    , before : OptionalArgument String
    , last : OptionalArgument Int
    }


residentConnection : (ResidentConnectionOptionalArguments -> ResidentConnectionOptionalArguments) -> SelectionSet decodesTo StarWars.Object.PlanetResidentsConnection -> SelectionSet (Maybe decodesTo) StarWars.Object.Planet
residentConnection fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, first = Absent, before = Absent, last = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "last" filledInOptionals.last Encode.int ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "residentConnection" optionalArgs object_ (identity >> Decode.nullable)


type alias FilmConnectionOptionalArguments =
    { after : OptionalArgument String
    , first : OptionalArgument Int
    , before : OptionalArgument String
    , last : OptionalArgument Int
    }


filmConnection : (FilmConnectionOptionalArguments -> FilmConnectionOptionalArguments) -> SelectionSet decodesTo StarWars.Object.PlanetFilmsConnection -> SelectionSet (Maybe decodesTo) StarWars.Object.Planet
filmConnection fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, first = Absent, before = Absent, last = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "last" filledInOptionals.last Encode.int ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "filmConnection" optionalArgs object_ (identity >> Decode.nullable)


{-| The ISO 8601 date format of the time that this resource was created.
-}
created : SelectionSet (Maybe String) StarWars.Object.Planet
created =
    Object.selectionForField "(Maybe String)" "created" [] (Decode.string |> Decode.nullable)


{-| The ISO 8601 date format of the time that this resource was edited.
-}
edited : SelectionSet (Maybe String) StarWars.Object.Planet
edited =
    Object.selectionForField "(Maybe String)" "edited" [] (Decode.string |> Decode.nullable)


{-| The ID of an object
-}
id : SelectionSet StarWars.ScalarCodecs.Id StarWars.Object.Planet
id =
    Object.selectionForField "ScalarCodecs.Id" "id" [] (StarWars.ScalarCodecs.codecs |> StarWars.Scalar.unwrapCodecs |> .codecId |> .decoder)
