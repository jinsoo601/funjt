export const parseStatus = res => {
	const rawData = res._bodyText;

	let data = rawData.split('<td');
	data.shift();
	data.pop();

	const currentAMPM = new Date().getHours() < 12 ? 'AM' : 'PM'
	const parsedData = data.map((val, index) => {
		const station = val.split(';">').pop().split('&nbsp').shift();
		const status = getStatus(val);
		let departureTime = status ? null : val.split('&nbsp;at').pop().split('</p>').shift().trim();
		if (departureTime && departureTime.length < 5) departureTime = `0${departureTime}`;
		const actualAMPM = getActualAMPM(currentAMPM, departureTime);
		departureTime = `${departureTime} ${actualAMPM}`;
		const key = `${index}`
		return { station, status, departureTime, key };
	});

	return parsedData;
}

const getActualAMPM = (currentAMPM, departureTime) => {
	if (!departureTime) return null;
	if (parseInt(departureTime.split(':')[0]) < 12) return currentAMPM;
	return currentAMPM === 'AM' ? 'PM' : 'AM';
}

const getStatus = val => {
	let status = null;
	if (val.includes('DEPARTED')) status = 'Departed';
	else if (val.includes('ALL ABOARD')) status = 'All Aboard';
	else if (val.includes('BOARDING')) status = 'Boarding';
	else if (val.includes('CANCELLED')) status = 'Cancelled';
	else if (val.includes('STAND BY')) status = 'Stand By';
	return status;
}