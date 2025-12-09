import React from 'react';
import styles from './CodeBlock.module.css';

export interface CodeBlockProps {
    code: string;
    title?: string;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    title,
    className = '',
}) => {
    return (
        <div className={`${styles.codeBlock} ${className}`}>
            {title && (
                <h4 className={styles.title}>{title}</h4>
            )}
            <pre className={styles.pre}>
                <code className={styles.code}>{code}</code>
            </pre>
        </div>
    );
};



