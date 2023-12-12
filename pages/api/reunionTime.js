export default function handler(req, res) {
    const options = {
        timeZone: 'Indian/Reunion',
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const reunionTime = new Date().toLocaleString('fr-FR', options);
    res.status(200).json({ dateTime: reunionTime });
}
