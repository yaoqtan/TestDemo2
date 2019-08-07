import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as IconSuccess } from "../../assets/images/notification/notification_success.svg";
import { ReactComponent as IconWarning } from "../../assets/images/notification/notification_warning.svg";
import { ReactComponent as IconInfo } from "../../assets/images/notification/notification_info.svg";
import { ReactComponent as IconError } from "../../assets/images/notification/notification_error.svg";
import { ReactComponent as IconClose } from "../../assets/images/notification/icon_close.svg";

const speed = 300;
const types = [
    {
        name: "success",
        icon: IconSuccess
    },
    {
        name: "warning",
        icon: IconWarning
    },
    {
        name: "info",
        icon: IconInfo
    },
    {
        name: "error",
        icon: IconError
    }
];

const NotificationStyled = styled.div`
    position: fixed;
    z-index: 999;
    top: 16px;
    width: 330px;
    max-width: 80%;
    padding: 20px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    overflow: hidden;
    display: flex;
    transition: right ${speed / 1000}s, opacity ${speed / 1000}s;
    right: ${({show}) => show ? "16px" : "-330px"};
    opacity: ${({show}) => show ? "1" : "0"};
    
    .icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        &.success {
            fill: #00bb9c;
        }
        &.warning {
            fill: #ea8010;
        }
        &.info {
            fill: #a9b7b7;
        }
        &.error {
            fill: #eb4f38;
        }
    }
    
    .content {
        flex-grow: 1;
        padding-left: 15px;
        .title {
            font-size: 16px;
            color: #1f2d3d;
        }
        .message {
            font-size: 14px;
            line-height: 21px;
            margin-top: 10px;
            color: #8391a5;
            text-align: justify;
        }
    }
    
    .close {
        width: 14px;
        height: 14px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 2;
        cursor: pointer;
        &:hover {
            opacity: .7;
        }
    }
`;

class NotificationComponent extends React.PureComponent {
    static propTypes = {
        duration: PropTypes.number,
        willUnmount: PropTypes.func,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        type: PropTypes.oneOf(["success", "warning", "info", "error"])
    };

    state = {
        show: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true });
            this._startTimer();
        }, 0);
    }

    componentWillUnmount() {
        this._stopTimer();
    }

    _startTimer = () => {
        const { duration } = this.props;

        if (duration) {
            this.timeout = setTimeout(() => {
                this.close();
            }, duration);
        }
    };

    _stopTimer = () => {
        clearTimeout(this.timeout);
    };

    close = () => {
        const { willUnmount } = this.props;
        this.setState({ show: false }, () => {
            setTimeout(() => {
                willUnmount();
            }, speed);
        });
    };

    render() {
        const { show } = this.state;
        const { title, message, type } = this.props;

        const typeItem = types.find(item => type === item.name) || types[2];
        
        return (
            <NotificationStyled show={show} onMouseEnter={this._stopTimer} onMouseLeave={this._startTimer}>
                <typeItem.icon className={`icon ${typeItem.name}`} />
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="message">{message}</div>
                </div>
                <IconClose className="close" onClick={this.close} />
            </NotificationStyled>
        );
    }
}

function Notification(options = {}, type) {
    const { message, title = type, duration = 0 } = options;

    const box = document.createElement("div");
    const body = document.body;
    body.appendChild(box);

    const props = {
        type,
        message: typeof options === "string" ? options : message,
        title,
        duration
    };

    function willUnmount() {
        ReactDOM.unmountComponentAtNode(box);
        body.removeChild(box);
    }

    ReactDOM.render(<NotificationComponent {...props} willUnmount={willUnmount} />, box);
}

export default Notification;

types.forEach(type => {
    const name = type.name;
    Notification[name] = (options = {}) => {
        return Notification(options, name);
    };
});