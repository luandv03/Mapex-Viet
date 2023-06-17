"use client";

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import usePlacesAutocomplete from // getGeocode,
// getLatLng,
"use-places-autocomplete";

const Map: NextPage = () => {
    const [lat, setLat] = useState(27.672932021393862);
    const [lng, setLng] = useState(85.31184012689732);

    const libraries = useMemo(() => ["places"], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAIA0w6mHH0FuG0veNQDXmuKgttrA5FFDE",
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex w-full">
            <div className="flex-1">
                <GoogleMap
                    options={mapOptions}
                    zoom={14}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: "100%", height: "100vh" }}
                    onLoad={() => console.log("Map Component Loaded...")}
                >
                    <MarkerF
                        position={mapCenter}
                        onLoad={() => console.log("Marker Loaded")}
                    />
                </GoogleMap>
            </div>
        </div>
    );
};

const PlacesAutocomplete = ({
    onAddressSelect,
}: {
    onAddressSelect?: (address: string) => void;
}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: { componentRestrictions: { country: "us" } },
        debounce: 300,
        cache: 86400,
    });

    const renderSuggestions = () => {
        return data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
                description,
            } = suggestion;

            return (
                <li
                    key={place_id}
                    onClick={() => {
                        setValue(description, false);
                        clearSuggestions();
                        onAddressSelect && onAddressSelect(description);
                    }}
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    };

    return (
        <div>
            <input
                value={value}
                disabled={!ready}
                onChange={(e) => setValue(e.target.value)}
                placeholder="123 Stariway To Heaven"
            />

            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
    );
};

export default Map;
