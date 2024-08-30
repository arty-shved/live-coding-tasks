// Нужно собрать в отсортированный массив все значения value

const data = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{ value: 7 }, { value: 5 }]
        },
        {
            value: 3,
            children: [{ value: 6 }, { value: 4 }]
        }
    ]
}

function dfs(graph, result = []) {
    result.push(graph.value);

    if (graph.children) {
        for (const child of graph.children) {
            dfs(child, result);
        }
    }

    return result.sort();
}

const result = dfs(data) // [ 1, 2, 3, 4, 5, 6, 7 ]