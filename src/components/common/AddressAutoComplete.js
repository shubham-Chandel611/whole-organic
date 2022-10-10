import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { makeStyles, InputAdornment, TextField, Card } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import styles from '../../assets/css/components/common/AddressAutoComplete.style'
import _ from 'lodash';

const useStyles = makeStyles(styles);

const AddressAutoComplete = ({
  address,
  handlePlaceChange,
  handlePlaceSelect,
  containerStyle,
  mapOuter,
}) => {
  const classes = useStyles();

  const searchOptions = {
    location: [47.6918452,-122.2226413],
    radius: 2000,
    types: ['address']
  }

  var options = {
    componentRestrictions: {country: 'au'}
  };
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handlePlaceChange}
        onSelect={handlePlaceSelect}
        highlightFirstSuggestion={true}
        searchOptions = {options}
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading
        }) => {
          console.log('suggestions', suggestions)
          return (
            <div>
              <TextField
                {...getInputProps({
                  placeholder: "Select",
                })}
                className={[classes.mapInDist,mapOuter && mapOuter].join(' ')}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn className={classes.locateIcon} />
                    </InputAdornment>
                  ),
                }}
              />
              {suggestions && suggestions.length ? (
              <Card className={[classes.addressContainer, containerStyle && containerStyle].join(' ')}>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";

                  const style = suggestion.active
                    ? { color: "#000", cursor: "pointer", lineHeight: '30px', fontWeight: 'bold' }
                    : { color: "#000", cursor: "pointer", lineHeight: '30px' };
                    return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span className="suggestions">
                        {suggestion.description}
                      </span>
                    </div>
                  )
                })}
              </Card>
              ) : null}
            </div>
          )}}

      </PlacesAutocomplete>
    </div>

  );
}

export default AddressAutoComplete

