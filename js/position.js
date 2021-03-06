function GraphPosition() {
    return {
        "success": true,
        "message": "",
        "data": {
            "states": [{
                    "id": 31,
                    "name": "updateBegin",
                    "chineseName": "服务升级",
                    "xCoordinate": 4,
                    "yCoordinate": 193
                },
                {
                    "id": 33,
                    "name": "updating",
                    "chineseName": "服务升级中",
                    "xCoordinate": 219,
                    "yCoordinate": 199
                },
                {
                    "id": 34,
                    "name": "updateSuccess",
                    "chineseName": "服务升级成功",
                    "xCoordinate": 456,
                    "yCoordinate": 169
                },
                {
                    "id": 35,
                    "name": "updateFail",
                    "chineseName": "服务升级失败",
                    "xCoordinate": 464,
                    "yCoordinate": 285
                }
            ],
            "relations": [{
                    "id": 30,
                    "fromStateId": 31,
                    "toStateID": 33
                },
                {
                    "id": 31,
                    "fromStateId": 33,
                    "toStateID": 34
                },
                {
                    "id": 32,
                    "fromStateId": 33,
                    "toStateID": 35
                }
            ]
        }
    }
}