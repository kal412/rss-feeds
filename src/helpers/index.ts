function convertToRssPubDay(date: string): string
{
    const days : string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const parsedDate: Date = new Date(date);
    const day: string = days[parsedDate.getDay()];

    const dateString: string = parsedDate.toISOString();
    const year: string = dateString.substring(0, 4);
    const month: string = dateString.substring(5, 7);
    const time: string = dateString.substring(11, 19);

    return `${day}, ${month} ${monthName[parsedDate.getMonth()]} ${year} ${time} UTC`;
}

function removeTags(description: string): string {
    const tagPattern = /<[^>]+>/g;

    const body = description.replace(tagPattern, '');

    return body;
}

export {
    convertToRssPubDay,
    removeTags
};