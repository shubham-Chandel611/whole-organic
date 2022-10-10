import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
        '& .fuse-chip-select__input': {
            color: theme.palette.text.primary
        },
        '&.standard': {
            '& $placeholder': {},
            '& $valueContainer': {
                paddingTop: 4
            }
        },
        '&.filled': {
            '& $placeholder': {
                left: 12
            },
            '& $valueContainer': {
                paddingTop: 24,
                paddingLeft: 12
            },
            '& $chip': {
                border: '1px solid rgba(0, 0, 0, 0.12)'
            }
        },
        '&.outlined': {
            '& $placeholder': {
                left: 12
            },
            '& $valueContainer': {
                paddingLeft: 12,
                paddingTop: 12
            }
        }
    },
    input: {
        display: 'flex',
        padding: 0
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 4,
        paddingTop: 12,
        minHeight: 40
    },
    chip: {
        margin: '4px 4px 4px 0'
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08
        )
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
    },
    singleValue: {
        fontSize: 16
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        fontSize: 16,
        margin: 0
    },
    paper: {
        position: 'absolute',
        zIndex: 2,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0
    },
    divider: {
        height: theme.spacing.unit * 2
    },
});

export default styles;