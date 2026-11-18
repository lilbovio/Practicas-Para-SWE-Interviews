/**
 * Count islands in a grid of "1" (land) and "0" (water).
 * Islands connect horizontally and vertically only, not diagonally.
 * Each unvisited land cell starts a new island; an iterative DFS marks the whole island.
 * The input grid is not modified.
 * Time: O(rows * cols); space: O(rows * cols) for the visited grid and stack.
 * @param {string[][]} grid
 * @returns {number}
 */
export function numberOfIslands(grid) {
    if (grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let islands = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] !== "1" || visited[row][col]) {
                continue;
            }
            islands++;
            visited[row][col] = true;
            const stack = [[row, col]];
            while (stack.length > 0) {
                const [r, c] = stack.pop();
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
                        && grid[nr][nc] === "1" && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        stack.push([nr, nc]);
                    }
                }
            }
        }
    }
    return islands;
}
