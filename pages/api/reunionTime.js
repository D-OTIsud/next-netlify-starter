export default function handler(req, res) {
    const options = {
        timeZone: 'Indian/Reunion',
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const reunionTime = new Date().toLocaleString('fr-FR', options);
    const formattedTime = reunionTime.replace(/:\d{2}\s/, 'h');

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(formattedTime);
}
