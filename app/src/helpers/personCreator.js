import moment from 'moment';

export const refsToPerson = (refs, visible_to) => {
    return {
        name: refs._name.value,
        email: [{
            label: 'work',
            value: refs._email.value,
            primary: true
        }],
        phone: [{
            label: 'work',
            value: refs._phone.value,
            primary: true
        }],
        visible_to: visible_to,
        '4af767b021868564752ea8d2b45c6af363237d6e': refs._groups.value,
        add_time: moment().format('YYYY-MM-DD HH:MM:SS'),
    }
};