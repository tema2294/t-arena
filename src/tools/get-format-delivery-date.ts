export const getFormatDeliveryDate = (date?: string) => {
    const [, month, day] = (date || '').split('-');

    return `${day}/${month}`
}

