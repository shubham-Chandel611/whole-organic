import React, { Component } from 'react';
import { TextField, withStyles } from '@material-ui/core';
import { withFormsy } from 'formsy-react';
import _ from 'lodash';
import styles from "../../assets/css/components/common/InputField.styles";

class InputField extends Component {

    changeValue = (event) => {
        this.props.setValue(event.currentTarget.value);
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    };

    render() {
        const { classes, inputStyle, inputValue } = this.props;
        const importedProps = _.pick(this.props, [
            'autoComplete',
            'autoFocus',
            'children',
            'className',
            'defaultValue',
            'disabled',
            'FormHelperTextProps',
            'fullWidth',
            'id',
            'InputLabelProps',
            'inputProps',
            'InputProps',
            'inputRef',
            'label',
            'multiline',
            'name',
            'onBlur',
            'onChange',
            'onFocus',
            'placeholder',
            'required',
            'rows',
            'rowsMax',
            'select',
            'SelectProps',
            'type',
            'variant',
            'maxLength',
            'pattern',
            'min',
            'max',
        ]);
        const value = this.props.value ? this.props.value : '';
        return (
            <TextField
                {...importedProps}
                value={value}
                onChange={this.changeValue}
                defaultValue={inputValue}
                value={this.props.value}
                error={Boolean(this.props.errorMessage)}
                helperText={this.props.errorMessage}
                className={[classes.textField, inputStyle && inputStyle].join(' ')}
            />
        );
    }
}

export default withStyles(styles)(withFormsy(InputField));