export const setTextFilter=(textValue)=>({
    type: 'SET_TEXT_FILTER',
    textValue
});

export const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate=()=>({
    type: 'SORT_BY_DATE'
});

export const setStartDate=(startDate)=>({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate=(endDate)=>({
    type: 'SET_END_DATE',
    endDate
});