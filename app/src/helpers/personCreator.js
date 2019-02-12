import moment from 'moment';

export const refsToPerson = (refs, visible_to) => {
    const data = new FormData();
    data.append('file', refs._file.files[0]);
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
        org_id: refs._org.value,
        visible_to: visible_to,
        avatar: data,
        '4af767b021868564752ea8d2b45c6af363237d6e': refs._groups.value,
        add_time: moment().format('YYYY-MM-DD HH:MM:SS'),
    }
};