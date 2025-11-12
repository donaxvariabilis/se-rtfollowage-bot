export default function handler(req, res) {
  // Set the follow start date (April 12, 1981 at 10:59 PM)
  const dob = new Date(1981, 3, 12, 22, 59, 0);
  const now = new Date();
  const diff = now - dob;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Set CORS headers to allow StreamElements to access this
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).send(
    `Roadtripper55 has been following @humanjuke81 for ${years} Year(s) ${months} Month(s) ${days} Day(s) ${hours} Hour(s) ${minutes} Minute(s) ${seconds} Second(s)`
  );
}
