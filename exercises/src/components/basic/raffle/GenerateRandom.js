export default () => {
    const numbers = []

    while (numbers.length < 6) {
        let selected = Math.round(Math.random() * (60 - 1) + 1)
        if (!numbers.includes(selected)) {
            numbers.push(selected)
        }
    }

    return numbers
}