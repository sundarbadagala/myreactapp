import React from 'react'
import {Badge, Button} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <div>
                Message/Content <Badge variant='primary'>Badge</Badge>
            </div>
            <hr/>
            <div>
                <div>
                    Messages <Badge variant='danger'>34</Badge>
                </div>
                <div>
                    Calls <Badge variant='warning'>1</Badge>
                </div>
                <div>
                    Gallery <Badge variant='primary'>208</Badge>
                </div>
                <div>
                    Videos <Badge variant='info'>189</Badge>
                </div>
            </div>
            <hr/>
            <div>
                <div>
                    Messages <Badge pill variant='danger'>34</Badge>
                </div>
                <div>
                    Calls <Badge pill variant='warning'>1</Badge>
                </div>
                <div>
                    Gallery <Badge pill variant='primary'>208</Badge>
                </div>
                <div>
                    Videos <Badge pill variant='info'>189</Badge>
                </div>
            </div>
            <hr/>
            <div>
                <Button>
                    Messages <Badge variant='light'>20</Badge>
                </Button>
            </div>
        </div>
    )
}

export default Main
