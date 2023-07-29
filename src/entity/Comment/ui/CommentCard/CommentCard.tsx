import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IComment } from 'entity/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface ICommentCard {
    className?: string
    comment: IComment
    isLoading?: boolean
}

export const CommentCard = memo(({
    className,
    comment,
    isLoading,
}: ICommentCard) => {
    const mods: Mods = {};

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, mods, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.userName} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, mods, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
                <Text className={cls.userName} title={comment.user.userName} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
