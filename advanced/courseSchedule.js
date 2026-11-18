/**
 * Decide whether all courses can be finished given prerequisite pairs.
 * A pair [course, prerequisite] means the prerequisite must be taken first.
 * Kahn's algorithm: repeatedly take courses with no unfinished prerequisites.
 * If some courses are never taken, they form a cycle.
 * Time: O(courses + prerequisites); space: O(courses + prerequisites).
 * @param {number} numCourses courses are numbered 0 to numCourses - 1
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
export function canFinish(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const dependents = Array.from({ length: numCourses }, () => []);

    for (const [course, prerequisite] of prerequisites) {
        indegree[course]++;
        dependents[prerequisite].push(course);
    }

    const ready = [];
    for (let course = 0; course < numCourses; course++) {
        if (indegree[course] === 0) {
            ready.push(course);
        }
    }

    let finished = 0;
    while (ready.length > 0) {
        const course = ready.pop();
        finished++;
        for (const next of dependents[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                ready.push(next);
            }
        }
    }
    return finished === numCourses;
}
