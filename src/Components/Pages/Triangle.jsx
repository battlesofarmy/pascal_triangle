export default function PascalTriangle({ rows }) {
  const generatePascalTriangle = (n) => {
    // Initialize a 2D array for the triangle
    const triangle = Array.from({ length: n }, () => Array(n).fill(0));

    // Fill the Pascal Triangle based on the formula
    for (let line = 0; line < n; line++) {
      triangle[line][0] = 1; // Every line starts with 1

      for (let i = 1; i <= line; i++) {
        triangle[line][i] = triangle[line - 1][i - 1] + triangle[line - 1][i];
      }
    }
    return triangle;
  };

  const triangle = generatePascalTriangle(rows);

  return (
    <div className="my-5" style={{ fontFamily: 'monospace' }}>
      {triangle.map((line, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          {' '.repeat(rows - index) /* Adds spaces for formatting */}
          {line
            .slice(0, index + 1)
            .map((num, idx) => (
              <span key={idx} style={{ margin: '0 8px' }}>{num}</span>
            ))}
        </div>
      ))}
    </div>
  );
}
