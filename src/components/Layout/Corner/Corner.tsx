import React from 'react';
import styles from './Corner.module.css';

export interface CornerProps {
    /** Corner color */
    color?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan' | 'white' | 'gray';
    /** Corner orientation */
    corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    /** Width of the vertical leg in pixels */
    width?: number; // Keep as number for SVG math
    /** Height of the horizontal leg in pixels */
    height?: number; // Keep as number for SVG math
    /** Thickness of the bar itself */
    thickness?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const Corner: React.FC<CornerProps> = ({
    color = 'orange',
    corner = 'top-left',
    width = 100,
    height = 50,
    thickness = 20,
    className = '',
    style,
}) => {
    // Logic for SVG path generation
    // We need to draw a path that creates the elbow.
    // Inner Radius is usually thickness / 2 or so.

    // Let's assume a fixed simplified geometry for now that matches standard LCARS elbows.
    // The "elbow" connects a vertical bar and a horizontal bar.

    const rOuter = thickness; // Outer radius
    const rInner = 0; // Sharp inner corner? Or curved? LCARS usually have curved inner too.

    // For a top-left corner:
    // It's a path starting at bottom-left of vertical leg, up, curve right, right to end of horizontal leg.
    // Then down thickness, left to inner curve, curve down, down to start.

    // Actually, Lcars elbows often have a specific ratio.
    // Let's implement a dynamic path based on width/height/thickness.

    // Ensure dimensions are large enough for thickness
    const w = Math.max(width, thickness);
    const h = Math.max(height, thickness);
    const t = thickness;

    // Radii
    const ro = Math.min(w, h); // Outer radius limited by size? 
    // Standard Lcars elbow often has the outer curve radius = width of the bar?
    // Let's try: Radius Outer = Thickness + Inner Radius. 
    // Let's set Inner Radius = 0 for sharp inner, or Thickness for rounded inner.
    // Usually inner is rounded.
    const ri = w > h ? h - t : w - t;

    // Let's use a simpler approach used in typical LCARS CSS:
    // Just an SVG with a path.

    // Top-Left:
    // (0,h) -> (0,0) with radius? No, (0,h) is straight up.
    // Start at (0, h). Line to (0, R_outer). Arc to (R_outer, 0). Line to (w, 0).
    // Line to (w, t). Line to (R_inner + t, t) ?? 

    // Let's stick to the previous implementation logic but adapted.
    // Since I'm overwriting, I need to provide a working implementation.
    // I will use a simple path generator.

    // Helper to flip/rotate coordinates would be complex. 
    // Easier to just write 4 paths or transform the SVG.

    let path = '';
    let viewBox = `0 0 ${w} ${h}`;

    // We can use transform on the SVG element to handle rotations.
    // top-left is default.
    // top-right: scale(-1, 1)
    // bottom-left: scale(1, -1)
    // bottom-right: scale(-1, -1)

    let transform = '';
    if (corner === 'top-right') transform = 'scale(-1, 1)';
    if (corner === 'bottom-left') transform = 'scale(1, -1)';
    if (corner === 'bottom-right') transform = 'scale(-1, -1)';

    // Path for Top-Left Corner
    // 1. Start bottom of vertical leg: (0, h)
    // 2. Line up to start of curve: (0, t) ?? No, curve is usually bigger. 
    //    Let's say the curve is defined by thickness. 
    //    Standard LCARS elbow: width > thickness, height > thickness.

    // Let's define the outer curve radius `R`.
    // And inner curve radius `r`.
    // t = thickness.
    // R = t + r

    // If we want a smooth elbow, R should be equal to the thickness if r is 0.
    // But LCARS usually has r > 0.
    // Let's default R = 1.5 * t, r = 0.5 * t. 

    const R = t * 1.5;
    const r = t * 0.5;

    // Check constraints
    // h must be >= R?
    // w must be >= R?

    const safeR = Math.min(w, h);
    // If w or h is small, we clamp.

    // Path:
    // M 0 h 
    // L 0 safeR 
    // A safeR safeR 0 0 1 safeR 0   (Arc to top edge)
    // L w 0
    // L w t
    // L (safeR + (safeR-t))? No.

    // Inner curve needs to be parallel.
    // M 0 h -> L 0 R -> A R R 0 0 1 R 0 -> L w 0 -> L w t -> L R t -> A r r 0 0 0 t R -> L t h -> Z

    // Wait, inner radius r = R - t.
    // So if R = safeR, then r = safeR - t.
    // If safeR < t, then generic rectangular block?

    const effectiveR = Math.min(w, h);
    const effectiver = Math.max(0, effectiveR - t);

    path = `
        M 0 ${h}
        L 0 ${effectiveR}
        A ${effectiveR} ${effectiveR} 0 0 1 ${effectiveR} 0
        L ${w} 0
        L ${w} ${t}
        L ${effectiveR} ${t}
        A ${effectiver} ${effectiver} 0 0 0 ${t} ${effectiveR}
        L ${t} ${h}
        Z
    `;

    // SVG Style
    // We used CSS for color in previous implementation.
    // But SVG fill needs to be set.
    // We can use 'currentColor' and set CSS color on the standard div, or specific class.

    return (
        <div
            className={`${styles.cornerContainer} ${styles[`color-${color}`]} ${className}`}
            style={{ width, height, ...style }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${w} ${h}`}
                preserveAspectRatio="none"
                style={{ transform, transformOrigin: 'center' }}
            >
                <path d={path} fill="currentColor" />
            </svg>
        </div>
    );
};
