
import { LoaderProps } from '../../types/types'


function Loader({ text }: LoaderProps) {

    return (
        <div className="d-flex align-items-center">
            <strong>{text}</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export { Loader } 