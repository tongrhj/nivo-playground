type DataPoint = { x: string; y: number };

export function fillMissingDays(points: DataPoint[]): DataPoint[] {
  // First, we need to parse the dates and sort the array to ensure it's in the correct order
  const parsedPoints = points.map(point => ({ ...point, x: new Date(point.x) }));
  parsedPoints.sort((a, b) => a.x.getTime() - b.x.getTime());

  // Find the start and end dates
  const startDate = parsedPoints[0].x;
  const endDate = parsedPoints[parsedPoints.length - 1].x;

  // Use a map to store the y values with date strings as keys for quick lookup
  const pointsMap = new Map<string, number>();
  parsedPoints.forEach(point => pointsMap.set(point.x.toISOString().split('T')[0], point.y));

  // Result array to hold all the data points
  const filledPoints: DataPoint[] = [];

  // Iterate from the start date to the end date
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dateStr = date.toISOString().split('T')[0];
    // Use the value from pointsMap if it exists; otherwise, use 0
    filledPoints.push({ x: dateStr, y: pointsMap.get(dateStr) ?? 0 });
  }

  return filledPoints;
}

export const mockData = [
  { x: '2022-12-06', y: 1 },
  { x: '2022-12-10', y: 7 },
  { x: '2022-12-14', y: 3 },
  { x: '2022-12-18', y: 2 },
  { x: '2022-12-22', y: 3 },
  { x: '2022-12-30', y: 1 },
  { x: '2023-01-03', y: 2 },
  { x: '2023-01-15', y: 18 }
];

export const dateFormatter = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
