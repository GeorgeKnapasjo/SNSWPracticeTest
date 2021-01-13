export const FormatDate = (expiryDate) => {
    var date = new Date(expiryDate);
    date.setDate(date.getDate() - 1);
    const formatedDate = new Intl.DateTimeFormat('en-AU', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
        .format(date)
        return (formatedDate)
}

export const RegistrationCalculator = (expDate) => {
    const expiry = new Date(expDate)
    expiry.setDate(expiry.getDate() - 1);
    if (expiry < new Date()) {
        return 0;
    }
    const diff = Math.abs(new Date() - expiry)
    const formatedDate = new Intl.DateTimeFormat('en-AU', {
        month: '2-digit'
    })
        .format(diff)
    return (formatedDate)
}
    //data returned from API may be incorrect, thus checking against most current date
export const RegistrationStatus = (expDate) => {
    const expiry = new Date(expDate);
    expiry.setDate(expiry.getDate() - 1);
    if (expiry < new Date()) {
        return 'Expired'
    }
    else {
        return 'Active'
    }
}