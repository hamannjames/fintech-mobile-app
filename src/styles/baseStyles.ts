export const baseConsts = {
    padding: 4,
    gap: 4,
}

export const container = {
    flex: 1,
    padding: baseConsts.padding,
    inner: {
        padding: baseConsts.padding
    }
}

export const direction = {
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    }
}

export const alignment = {
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHorizontal: {
        alignItems: 'center'
    },
    centerVertical: {
        justifyContent: 'center'
    }
}

export default baseConsts;